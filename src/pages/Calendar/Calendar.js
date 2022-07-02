import './App.css';
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales ={
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales, 
});

const events = [
  {
    title: "Exportacion de Lote",
    allDay: true,
    start: new Date(2022,5,1),
    end: new Date(2022,5,8)
  },
  {
    title: "Cliente recibe el Lote",
    start: new Date(2022,8,3),
    end: new Date(2022,8,10)
  },
  {
    title: "Reunion",
    start: new Date(2022,10,2),
    end: new Date(2022,10,4)
  },
]


function CalendarPage () {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent(){
    setAllEvents([...allEvents, newEvent])
  }

  return (
    <div className="App">
    <h1>Calendario</h1>
    <h2>Agregar Nuevo Evento</h2>
    <div>
      <input type = "text" placeholder = "Agregar Titulo" style={{width: "20%", marginRight: "10px"}}
        value={newEvent.title} onChange = {(e) => setNewEvent({...newEvent, title: e.target.value})}/>
      <DatePicker placeholderText = "Iniciar Dia" style = {{marginRight: "10px"}}
        selected = {newEvent.start} onChange = {(start) => setNewEvent({...newEvent, start})}/>
      <DatePicker placeholderText = "Finalizar Dia"
        selected = {newEvent.end} onChange = {(end) => setNewEvent({...newEvent, end})}/>
        <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Agregar Evento</button>
    </div>
      <Calendar localizer={localizer} 
      events = {allEvents} 
      startAccessor = "start" 
      endAccessor = "end" 
      style = {{height: 500, margin: "50px"}}/>
    </div>
  );
}

export default CalendarPage;
