from lxml import etree




def parseDom(dom): 
    parser = etree.HTMLParser()
    tree = etree.fromstring(dom, parser)
    return tree

def populateDomWithMetadata(dom, metadata):
    # first parse the dom 
    tree = parseDom(dom)
    # use xpath to get the element that has 
    revision_date_td = tree.xpath('//td[text()="Revision Date: "]')
    version_td = tree.xpath('//td[text()="Version#"]')
    title_td = tree.xpath('//td[text()="title _placeholder"]')

    if len(revision_date_td) > 0:
        revision_date_td[0].text = 'Revision Date: ' + str(metadata['date'])
        version_td[0].text = str(metadata['revision'])
        title_td[0].text = str(metadata['title'])
        dom = etree.tostring(tree, encoding='unicode', method='html')

    return dom


def addSectionAndContent(dom, section, content): 
    tree = parseDom(dom)
    # check if the section title already exists
    potential_sections = tree.xpath('//h1[text()="{section}"]')  

    if len(potential_sections) > 0:
        





