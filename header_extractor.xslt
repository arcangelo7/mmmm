<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:x="http://www.tei-c.org/ns/1.0"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:strip-space elements="*"/>
    
    <xsl:template match="x:teiHeader">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <body>
                <table border="1">
                    <xsl:apply-templates/>
                </table>
            </body>
        </html>
    </xsl:template>
   
    
    <xsl:template match="x:fileDesc/x:titleStmt">
        <tr>
            <td>Title</td>
            <td><xsl:value-of select="x:title"/></td>
        </tr>
        <xsl:for-each select="x:author">
            <tr>
                <td>Author</td>
                <td><xsl:value-of select="current()"/></td>
            </tr>
        </xsl:for-each>
    </xsl:template>
    
    <xsl:template match="x:fileDesc/x:publicationStmt">
        <tr>
            <td>Publisher</td>
            <td><xsl:value-of select="x:publisher"/></td>
        </tr>
        <xsl:for-each select="x:idno">
            <tr>
                <td><xsl:value-of select="@type"/></td>
                <td><xsl:value-of select="current()"/></td>
            </tr>
        </xsl:for-each>
        <tr>
            <td>Date</td>
            <td><xsl:value-of select="x:date"/></td>
        </tr>
    </xsl:template>
    
    <xsl:template match="x:fileDesc/x:sourceDesc">
        <tr>
            <td>Source Description</td>
            <td><xsl:value-of select="x:p"/></td>
        </tr>
    </xsl:template>
    
</xsl:stylesheet>