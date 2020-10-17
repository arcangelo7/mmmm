<?xml version="1.0"?>
<xsl:stylesheet 
    version="2.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:tei="http://www.tei-c.org/ns/1.0"
    xmlns:docbook="http://docbook.org/ns/docbook"
    exclude-result-prefixes="tei docbook">  
    
    <xsl:template match="tei:TEI">
        <article xmlns='http://docbook.org/ns/docbook' version='5.2'>
            <xsl:apply-templates/>
        </article>
    </xsl:template>
    
    <xsl:template match="tei:teiHeader">
        <info xmlns='http://docbook.org/ns/docbook'>
            <xsl:apply-templates/>
        </info>
    </xsl:template>
    
    <xsl:template match="tei:fileDesc/tei:titleStmt">
        <title xmlns='http://docbook.org/ns/docbook'><xsl:value-of select="tei:title"/></title>
        <authorgroup xmlns='http://docbook.org/ns/docbook'>
            <xsl:for-each select="tei:author">
                <author><personname>
                    <xsl:value-of select="current()"/>
                </personname></author>
            </xsl:for-each>
        </authorgroup>
    </xsl:template>
    
    <xsl:template match="tei:fileDesc/tei:publicationStmt">
        <publisher xmlns='http://docbook.org/ns/docbook'>
            <publishername><xsl:value-of select="tei:publisher"/></publishername>
        </publisher>
        <xsl:for-each select="tei:idno">
            <biblioid xmlns='http://docbook.org/ns/docbook'>
                <xsl:attribute name="class">
                    <xsl:value-of select="@type" />
                </xsl:attribute>
                <xsl:value-of select="current()"/>
            </biblioid>
        </xsl:for-each>
        <pubdate xmlns='http://docbook.org/ns/docbook'><xsl:value-of select="tei:date"/></pubdate>
    </xsl:template>
    
    <xsl:template match="tei:fileDesc/tei:sourceDesc">
        <bibliomisc xmlns='http://docbook.org/ns/docbook'><xsl:value-of select="tei:p"/></bibliomisc>
    </xsl:template>
    
    <xsl:template match="tei:div">
        <xsl:choose>
            <xsl:when test="@type='section'">
                <section xmlns='http://docbook.org/ns/docbook'>
                    <xsl:if test="not(./tei:head)"><title><xsl:value-of select="@xml:id"/></title></xsl:if>
                    <xsl:apply-templates/>
                </section>
            </xsl:when>
            <xsl:otherwise>
                <xsl:apply-templates/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
    <xsl:template match="tei:head">
        <title xmlns='http://docbook.org/ns/docbook'><xsl:value-of select="current()" /></title>
    </xsl:template>
    
    <xsl:template match="tei:figure">
        <figure xmlns='http://docbook.org/ns/docbook'>
            <title><xsl:value-of select=".//tei:label" /></title>
            <mediaobject>
                <imageobject condition="web">
                    <imagedata fileref="{tei:graphic/@url}"/>
                </imageobject>
                <textobject>
                    <phrase><xsl:value-of select=".//tei:desc" /></phrase>
                </textobject>
            </mediaobject>
        </figure>
    </xsl:template>
    
    <xsl:template match="tei:byline">
        <para xmlns='http://docbook.org/ns/docbook'><xsl:value-of select="." /></para>
    </xsl:template>
    
    <xsl:template match="tei:p">
        <para xmlns='http://docbook.org/ns/docbook'>
            <xsl:if test="@xml:id">
                <xsl:attribute name="xml:id">
                    <xsl:value-of select="@xml:id" />
                </xsl:attribute>
            </xsl:if>
            
            <xsl:value-of select="." />
        </para>
    </xsl:template>
    
    <xsl:template match="tei:table">
        <section xmlns='http://docbook.org/ns/docbook'>
            <title><xsl:value-of select=".//label"/></title>
        <table>
            <caption>
                <xsl:value-of select=".//note"/><xsl:value-of select=".//tei:desc"/>
            </caption>
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
        </section>
    </xsl:template>
    
</xsl:stylesheet>
