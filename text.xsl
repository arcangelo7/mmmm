<?xml version="1.0"?>
<xsl:stylesheet 
    version="2.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:tei="http://www.tei-c.org/ns/1.0">  

    <xsl:template match="tei:body">
        <html>
            <head>
                <title>Roller stones</title>
            </head>
            <body>
                <xsl:apply-templates/>
				<script src="script/general.js"></script>
				<script type="text/javascript" src="script/audio.js"></script>
				<script type="text/javascript" src="script/2040.js"></script>
				<script type="text/javascript" src="script/metadata_viewer.js"></script>            
			</body>
        </html>
    </xsl:template>

    <xsl:template match="tei:div">
    	<xsl:if test=".//tei:head[@type='mainTitle']">
    		<h1><xsl:value-of select=".//tei:head[@type='mainTitle']" /></h1>
    	</xsl:if>
    	
    	<xsl:if test=".//tei:head[@style='h2']">
    		<h2><xsl:value-of select=".//tei:head[@style='h2']" /></h2>
    	</xsl:if>
    	
    	<xsl:if test="tei:figure">
    		<xsl:for-each select="tei:figure">
		    	<figure>
    		  		<img src="{tei:graphic/@url}"/>
    				<figCaption>
    					<p><xsl:value-of select=".//tei:label" /></p>
    					<p><xsl:value-of select=".//tei:desc" /></p>
    				</figCaption>
    			</figure>
    		</xsl:for-each>
    	</xsl:if>
    	
 	    <xsl:for-each select=".//tei:byline">
		    <p><xsl:value-of select="." /></p>
    	</xsl:for-each>
    	
    	<xsl:for-each select=".//tei:p">
		    <p>
		    	<xsl:if test="@xml:id">
  			    	<xsl:attribute name="id">
		    			<xsl:value-of select="@xml:id" />
		    		</xsl:attribute>
		    	</xsl:if>

		    	<xsl:value-of select="." />
		    </p>
    	</xsl:for-each>
    </xsl:template>
</xsl:stylesheet>
