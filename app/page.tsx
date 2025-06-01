import { getDayDate } from "@/components/utils/date";



export default function Home() {
  const today = new Date();
  const dayDate = getDayDate(today);
  const dayOfWeek = today.toLocaleDateString('en-US', { weekday: 'long' });
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <>
      <section className="container mx-auto p-4 pt-0 flex flex-col items-center border text-text border-secondary/35 rounded-lg shadow-lg ">
        <div className="flex items-start gap-2 relative -translate-y-3 p-3 rounded-es-2xl rounded-ee-2xl
"> 
{        daysOfWeek.map((day, index) => (
          <span key={index}  className={`day ${day === dayOfWeek ? ' !bg-secondary text-white' : 'text-text'}`}>
            {day}
          </span>
        ))}
        <span className="p-2 m-1 bg-secondary font-semibold rounded-lg shadow-2xl"> {dayDate}</span>
          </div>
        <h2 className=" text-2xl font-bold uppercase">Appointments</h2>
        <div>cards of todays appointments</div>
      </section>
    </>
  );
}
