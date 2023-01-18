import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupInfo: {}) {
    fetch(`${process.env.REACT_APP_FIREBASE_URL}/meetup.json`, {
      method: "POST",
      body: JSON.stringify(meetupInfo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(()=>{
      history.replace("/")
    });
  }

  return (
    <section className="mx-auto ">
      <h1 className="py-2.5 text-2xl font-semibold m-10 max-w-2xl sm:mx-auto">
        Add New Meetup
      </h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
