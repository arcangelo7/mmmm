import xml.etree.ElementTree as ET
import json
import wikipedia
import os

wikipediaDict = {}

for subdir, dirs, files in os.walk("issues/no2"):
    for file in files:
        filepath = subdir + os.sep + file
        root = ET.parse(filepath).getroot()
        for span in root.iter("{http://www.tei-c.org/ns/1.0}span"):
            try:
                if span.attrib["type"] == "place":
                    wikipediaDict[span.text] = wikipedia.page(title=span.text, auto_suggest=False).url
                elif span.attrib["type"] == "date":
                    wikipediaDict[span.text] = wikipedia.page(title=span.text, auto_suggest=False).url
            except wikipedia.exceptions.DisambiguationError:
                wikipediaDict[span.text] = "https://en.wikipedia.org/wiki/" + span.text
            except wikipedia.exceptions.PageError:
                pass
            except KeyError:
                pass


with open("wikipedia.json", "r") as prevFile:
    resultDict = json.load(prevFile)
    resultDict.update(wikipediaDict)
    resultJSON = json.dumps(resultDict)

with open("wikipedia.json", "w") as prevFile:
    prevFile.write(resultJSON)


