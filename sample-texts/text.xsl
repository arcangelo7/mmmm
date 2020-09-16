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
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="tei:div">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="tei:head">
        <xsl:choose>
            <xsl:when test="@type='mainTitle'">
                <h1><xsl:value-of select="current()" /></h1>
            </xsl:when>
            <xsl:when test="@style='h2'">
                <h2><xsl:value-of select="current()" /></h2>
            </xsl:when>
            <xsl:otherwise>
                <h3><xsl:value-of select="current()" /></h3>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
    <xsl:template match="tei:figure">
        <figure>
            <img src="{tei:graphic/@url}"/>
            <figCaption>
                <p><xsl:value-of select=".//tei:label" /></p>
                <p><xsl:value-of select=".//tei:desc" /></p>
            </figCaption>
        </figure>
    </xsl:template>
    
    <xsl:template match="tei:byline">
        <p><xsl:value-of select="." /></p>
    </xsl:template>
    
    <xsl:template match="tei:p">
        <p>
            <xsl:if test="@xml:id">
                <xsl:attribute name="id">
                    <xsl:value-of select="@xml:id" />
                </xsl:attribute>
            </xsl:if>
            
            <xsl:value-of select="." />
        </p>
    </xsl:template>
    
    <xsl:template match="tei:table">
        <table>
            <xsl:for-each select="tei:row">
                <tr>
                    <xsl:for-each select="tei:cell">
                        <xsl:choose>
                            <xsl:when test="@role = 'label'">
                                <th>
                                    <xsl:if test="@rows">
                                        <xsl:attribute name="rowspan">
                                            <xsl:value-of select="@rows"/>
                                        </xsl:attribute>
                                    </xsl:if>
                                    
                                    <xsl:if test="@cols">
                                        <xsl:attribute name="colspan">
                                            <xsl:value-of select="@cols"/>
                                        </xsl:attribute>
                                    </xsl:if>
                                    
                                    <xsl:value-of select="current()"/>
                                    
                                </th>
                            </xsl:when>
                            <xsl:otherwise>
                                <td>
                                    <xsl:value-of select="current()"/>
                                </td>
                            </xsl:otherwise>
                        </xsl:choose>
                    </xsl:for-each>
                </tr>
            </xsl:for-each>
        </table>
    </xsl:template>
    
</xsl:stylesheet>
