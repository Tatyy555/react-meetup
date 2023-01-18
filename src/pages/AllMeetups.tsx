import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

type MeetupType = {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
};

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState<MeetupType[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_FIREBASE_URL}/meetup.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoadedMeetups(meetups);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section className="flex flex-col justify-center items-center">
        <p className="mt-20 animate-pulse text-3xl">Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1 className="px-10 py-2.5 text-2xl font-semibold mx-auto ">
        All Meetups
      </h1>
      <MeetupList meetups={loadedMeetups} />;
    </section>
  );
}

export default AllMeetupsPage;
