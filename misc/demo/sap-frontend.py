import streamlit as st
import requests
import utils


BACKEND_URL_TEMPLATE_GENERATION = "http://localhost:5000/generateTemplate"
BACKEND_URL_SECTION_POPULATE = "http://localhost:5000/populateSection"
# BACKEND_URL_POPULATE_METADATA = "http://localhost:5000/populateWithMetaData"

st.title("SAP Template Generator")

def render_html(): 
    st.components.v1.html(st.session_state["live_html"], width=1000, height=1000)

def show_metadata_form():
    with st.sidebar.form("SAP metadata"): 
        st.date_input("Today's Date", key="date")
        st.text_input("Title: ", key="title")
        st.number_input("Revision: ", key="revision")
        submitted = st.form_submit_button("Initiate the SAP")

        if submitted:
            #put the data in the session state as a dict
            st.session_state["metadata"] = {
                "date": st.session_state["date"],
                "title": st.session_state["title"],
                "revision": st.session_state["revision"]
            }
            st.session_state["live_html"] = utils.populateDomWithMetadata(st.session_state["live_html"], st.session_state["metadata"])
            st.rerun()

def show_section_input():
    # Show a text input to get the title 
    # Show another input to enter the prompt 
    with st.sidebar.form("LLM Query"):
        st.text_input("Title of Section: ", key = 'title')
        st.text_input("Query", key = 'query')
        if st.form_submit_button("Generate using Llama"):      
            response = requests.post(BACKEND_URL_SECTION_POPULATE)
            bot_response = response.json()['response']['content']
            



# state management

if 'live_html' and 'metadata' in st.session_state:
    # the state in which metadata is populated and it is ready for populating different sections 
    # using Llama
    # st.components.v1.html(st.session_state["live_html"], width=1000, height=1000)
    render_html()
    show_section_input()
        
elif 'live_html' in st.session_state:
    # the state in which live_html is ready to be populated with metadata
    # st.components.v1.html(st.session_state["live_html"], width=1000, height=1000)
    render_html()
    show_metadata_form()
else:  
    if st.sidebar.button("Generate Template"): 
        response = requests.post(BACKEND_URL_TEMPLATE_GENERATION, json={})
        template = response.json()['template']
        # st.html(template)
        st.session_state["live_html"] = template
        st.rerun()




