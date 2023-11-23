

import React, { useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timerGridPlugin from "@fullcalendar/timegrid";
import { useEvents } from "./useFetchData";
import { Link } from 'react-router-dom';

function GoogleCalendar() {
  const { Events, isLoading } = useEvents();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) return "Loading...";

  const openModal = (eventInfo) => {
    setSelectedEvent(eventInfo.event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <FullCalendar
        defaultView="dayGridDay"
        plugins={[
          dayGridPlugin,
          timerGridPlugin,
          interactionPlugin,
          listPlugin,
        ]}
        eventClick={openModal}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "dayGridMonth timeGridWeek timeGridDay listWeek",
          center: "title",
          end: "today prev next",
        }}
        events={Events.map((eventData) => ({
          title: eventData.user_name,
          date: eventData.date_time,
          description: 'This is event with more details.',
          mobile_no: eventData.mobile_no,
          nid: eventData.nid,
          video_Call_Link: eventData.video_Call_Link,
        }))}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="modal-container bg-white w-86 h-96 rounded-md mx-auto shadow-lg">
              <div className="modal-content py-6 text-left px-2">
                {/* Modal header */}
                <div className="modal-header">
                  {/* <h3 className="text-lg font-semibold">Event Details</h3> */}
                  <button onClick={closeModal} className="modal-close text-3xl -mt-5">
                    &#215;
                  </button>
                </div>

                {/* Modal body */}
                <div className="modal-body ">
                  <p className='mt-3'>Name: {selectedEvent.title}</p>
                  <p className='mt-3'>Date & Time: {selectedEvent.extendedProps.date}</p>
                  <p className='mt-3'>Description: {selectedEvent.extendedProps.description}</p>
                  <p className='mt-3'>Phone Number: {selectedEvent.extendedProps.mobile_no}</p>
                  
                 <p className='mt-3'>Video Call :<Link className=" bg-blue-400" to={`/${selectedEvent.extendedProps.video_Call_Link}`} >{selectedEvent.extendedProps.video_Call_Link}</Link> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GoogleCalendar;
