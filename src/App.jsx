import { NotesList } from "./components";  
import './index.css';

const App = () => {

	const notes = [
        {
            id: 1,
            content: 'HTML is easy',
            date: '2021-05-30T17:30:31.098Z',
            important: true
        },
        {
            id: 2,
            content: 'Browser can execute only JavaScript',
            date: '2021-05-30T18:39:34.091Z',
            important: false
        },
        {
            id: 3,
            content: 'Most important methods of HTTP-protocol are GET and POST',
            date: '2021-05-30T19:20:14.298Z',
            important: true
        }
    ];

	return (
		<table className="notesTable">
			<h2 className="headerTitle">Notes</h2>
			<NotesList notes={notes} />
		</table>
	);
};

export default App;