import streamlit as st
import requests
from pylatex import Document, Section, Subsection, Command
from pylatex.utils import NoEscape
from pdf2image import convert_from_bytes


BACKEND_URL_TEMPLATE_GENERATION = "http://localhost:5000/generateTemplate"
BACKEND_URL_SECTION_POPULATE = "http://localhost:5000/populateSection"

st.title("SAP Template Generator with Llama")

st.sidebar.header("Generate SAP Template")

if st.sidebar.button("Generate Template"): 
    response = requests.post(BACKEND_URL_TEMPLATE_GENERATION, json={})
    # print(response)
    template = response.json()['template']
    st.session_state['template'] = template

if 'template' in st.session_state: 
    st.header("Generated SAP template")
    # st.text_area('Template', st.session_state['template'], height=300)
    # st.markdown(f"$$\n{st.session_state['template']}\n$$", unsafe_allow_html=True)
    doc = Document()
    with doc.create(Section('SAP Template')):
        doc.append(NoEscape(st.session_state['template']))
    doc.generate_pdf('template', clean_tex=True)
    images = convert_from_bytes(doc.dumps_pdf())
    st.image(images[0], use_column_width=True)



    st.header("Populate Sections")
    section = st.text_input("Section Name")
    content = st.text_area('Content for Section')
    
    if st.button('Populate Section'):
        response = requests.post(BACKEND_URL_SECTION_POPULATE, json={'section': section, 'content': content})
        populated_content = response.json.get('content', '')
        st.session_state['populated_content'] = populated_content

    if 'populated_content' in st.session_state:
        st.header('Populated Section')
        st.text_area('Populated Content', st.session_state['populated_content'], height=200)