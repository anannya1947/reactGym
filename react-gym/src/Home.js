import { useState } from 'react';
import RoutineList from './routineList';

const Home = () => {
    const [routines, setRoutines] = useState([
        { exercise: 'Deadlift', weight: '100 kg', reps: '5', id: 1 },
        { exercise: 'Squat', weight: '80 kg', reps: '7', id: 2 },
        { exercise: 'Bench Press', weight: '60 kg', reps: '3', id: 3 },
        { exercise: 'Shoulder Press', weight: '50 kg', reps: '1', id: 4 }
    ]);

    const handleDelete = (id) => {
        const newRoutines = routines.filter(routine => routine.id !== id);
        setRoutines(newRoutines);
    }
    return (
        <div className="home">
            <RoutineList routines={routines} title="All Routines" handleDelete={handleDelete}/>
            <RoutineList routines={routines.filter((routine) => routine.exercise === 'Deadlift')} title="Deadlift Routine"/>
        </div>
      );
}
 
export default Home;