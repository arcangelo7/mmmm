<?xml version="1.0"?>
<xsl:stylesheet 
    version="2.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:tei="http://www.tei-c.org/ns/1.0"
    exclude-result-prefixes="tei xsl">  
    
    <xsl:output method="xml" omit-xml-declaration="yes" indent="yes" />
    <xsl:template match="tei:teiHeader">
        <head>
            <title>
                <xsl:value-of select="tei:fileDesc/tei:titleStmt/tei:title"/>
            </title>
            <link rel="schema.DC" href="http://purl.org/dc/elements/1.1/" />
            <link rel="schema.DCTERMS" href="http://purl.org/dc/terms/" />
            <xsl:apply-templates/>
            <meta name="DC.format" scheme="DCTERMS.IMT" content="text/html" />
            <meta name="DC.type" scheme="DCTERMS.DCMIType" content="Text" />
        </head>
    </xsl:template>
    
    <xsl:template match="tei:fileDesc">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="tei:sourceDesc" />
    
    <xsl:template match="tei:fileDesc/tei:titleStmt">
        <meta name="DC.title">
            <xsl:attribute name="content">
                <xsl:value-of select="tei:title"/>
            </xsl:attribute>
        </meta>
        <xsl:for-each select="tei:author">
            <meta name="DC.creator">
                <xsl:attribute name="content">
                    <xsl:value-of select="current()"/>
                </xsl:attribute>
            </meta>
        </xsl:for-each>
    </xsl:template>
    
    <xsl:template match="tei:fileDesc/tei:publicationStmt">
        <meta name="DC.publisher">
            <xsl:attribute name="content">
                <xsl:value-of select="tei:publisher"/>
            </xsl:attribute>
        </meta>
        <xsl:for-each select="tei:idno">
            <meta name="DC.identifier">
                <xsl:attribute name="scheme">
                    <xsl:value-of select="concat('DCTERMS.', @type)"/>
                </xsl:attribute>
                <xsl:attribute name="content">
                    <xsl:value-of select="current()"/>
                </xsl:attribute>
            </meta>
        </xsl:for-each>
        <meta name="DCTERMS.issued" scheme="DCTERMS.W3CDTF">
            <xsl:attribute name="content">
                <xsl:value-of select="tei:date"/>
            </xsl:attribute>
        </meta>
    </xsl:template>
    
    <xsl:template match="tei:TEI">
        <html>
            <xsl:apply-templates/>
        </html>
    </xsl:template>
    
    <xsl:template match="tei:text">
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="tei:body">
        <body>
            <xsl:apply-templates/>
        </body>
    </xsl:template>
    
    <xsl:template match="tei:div">
        <xsl:choose>
            <xsl:when test="@type='section'">
                <section>
                    <xsl:apply-templates select="@*"/>
                    <xsl:apply-templates/>
                </section>
            </xsl:when>
            <xsl:when test="@type='span'">
                <span>
                    <xsl:apply-templates select="@*"/>
                    <xsl:apply-templates/>
                </span>
            </xsl:when>
            <xsl:otherwise>
                <xsl:apply-templates/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
    <xsl:template match="tei:head">
        <xsl:choose>
            <xsl:when test="@type='mainTitle'">
                <h1><xsl:value-of select="current()" /></h1>
            </xsl:when>
            <xsl:when test="@style='h2'">
                <h2><xsl:value-of select="current()" /></h2>
            </xsl:when>
            <xsl:when test="@style='h3'">
                <h3><xsl:value-of select="current()" /></h3>
            </xsl:when>
            <xsl:otherwise>
                <h4><xsl:value-of select="current()" /></h4>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <xsl:template match="tei:list">
        <xsl:choose>
            <xsl:when test="@type='unordered'">
                <ul>
                    <xsl:apply-templates/>
                </ul>
            </xsl:when>
            <xsl:when test="@type='ordered'">
                <ol>
                    <xsl:apply-templates/>
                </ol>
            </xsl:when>
            <xsl:otherwise>
                <ul>
                    <xsl:apply-templates/>
                </ul>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <xsl:template match="tei:list/tei:item">
        <li>
            <xsl:apply-templates select="@*"/>
            <xsl:apply-templates/>
        </li>
    </xsl:template>
    
    <xsl:template match="tei:figure">
        <figure id="{@xml:id}">
            <a href="{tei:graphic/@url}" target="_blank"><img src="{tei:graphic/@url}"/></a>
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
            <xsl:apply-templates select="@*"/>
            <xsl:apply-templates/>
        </p>
    </xsl:template>

    <xsl:template match="tei:title">
        <em><xsl:value-of select="." /></em>
    </xsl:template>
    
    <xsl:template match="tei:label">
        <label>
            <xsl:apply-templates select="@*"/>
            <xsl:apply-templates/>
        </label>
    </xsl:template>
    
    <xsl:template match="tei:blockquote">
        <blockquote>
            <xsl:apply-templates select="@*"/>
            <xsl:apply-templates/>
        </blockquote>
    </xsl:template>
    
    <xsl:template match="tei:aside">
        <aside>
            <xsl:apply-templates select="@*"/>
            <xsl:apply-templates/>
        </aside>
    </xsl:template>
    
    <xsl:template match="tei:ref">
        <a>
            <xsl:apply-templates select="@*"/>
            <xsl:apply-templates/>
        </a>
    </xsl:template>
    
    <xsl:template match="tei:rs">
        <span>
            <xsl:apply-templates select="@*"/>
            <xsl:apply-templates/>
        </span>
    </xsl:template>

    <xsl:template match="tei:code">
        <code class="prettyprint">
            <xsl:value-of select="." />
        </code>
    </xsl:template>
    
    <xsl:template match="tei:span">
        <span>
            <xsl:apply-templates select="@*"/>
            <xsl:apply-templates/>
        </span>
    </xsl:template>
    
    <xsl:template match="tei:time">
        <time>
            <xsl:apply-templates select="@*"/>
            <xsl:apply-templates/>
        </time>
    </xsl:template>
    
    <xsl:template match="tei:table">
        <table>
            <caption>
                <p class="num"><xsl:value-of select=".//tei:label" /></p>
                <p>
                    <xsl:value-of select=".//tei:desc" />
                </p>
                <xsl:if test=".//tei:note">
                    <p class="footnote"><xsl:value-of select=".//tei:note"/></p>
                </xsl:if>    
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
    </xsl:template>
    
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
    
    <xsl:template match="@xml:id">
        <xsl:attribute name="id"><xsl:value-of select='.' /></xsl:attribute>
    </xsl:template>

    <xsl:template match="@target">
        <xsl:attribute name="href"><xsl:value-of select='.' /></xsl:attribute>
    </xsl:template>
    
    <xsl:template match="@type">
        <xsl:if test="current() != 'section'">
            <xsl:attribute name="class"><xsl:value-of select='.' /></xsl:attribute>
        </xsl:if>
        
    </xsl:template>

    <xsl:template match="@when">
            <xsl:attribute name="datetime"><xsl:value-of select='.' /></xsl:attribute>        
    </xsl:template>
    
    <xsl:template match="@rend">
        <xsl:attribute name="class"><xsl:value-of select='.' /></xsl:attribute>
    </xsl:template>
    
</xsl:stylesheet>
