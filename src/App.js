import React from "react";
import "./App.css";
import contacts from "./data/contacts";
import ContactTree from "./components/ContactTree";

export default () => <ContactTree contacts={contacts} />;
