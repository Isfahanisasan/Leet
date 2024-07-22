import streamlit as st
import requests

BACKEND_URL = "http://localhost:5000/process"

st.title("Chatbot Interface")

# initialize chat history 
if "messages" not in st.session_state: 
    st.session_state["messages"] = []

def send_messages():
    user_message = st.session_state.user_input
    st.session_state.user_input = ""

    if user_message: 
        st.session_state["messages"].append(f"User: {user_message}")
        response = requests.post(BACKEND_URL, json={"query": user_message, "priority": 1})
        bot_response = response.json()["response"]["content"]
        st.session_state["messages"].append(f"LLM: {bot_response}")

for message in st.session_state["messages"]: 
    st.write(message)

st.text_input("Type your response here:", key="user_input", on_change=send_messages)



