import React from "react";
import MeetupItem from "./MeetupItem";

type MeetupListType = {
  meetups: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  }[];
};

function MeetupList(props: MeetupListType) {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;
