import React, {useState, useEffect} from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState('red');

	useEffect(() => {
		const cambiarColorAutomaticamente = () => {
		  if (color === 'red') {
			setColor('green');
		  } else if (color === 'green') {
			setColor('yellow');
		  } else if (color === 'yellow') {
			setColor('red');
		  }
		};
		const intervalo = setInterval(cambiarColorAutomaticamente, 2000); // Cambiara cada 2 segundos

		return () => {
			clearInterval(intervalo);
		  };
		}, [color]);

		return (
			<div className="semaforo">
			  <div className={`light red ${color === 'red' ? 'active' : ''}`}></div>
			  <div className={`light yellow ${color === 'yellow' ? 'active' : ''}`}></div>
			  <div className={`light green ${color === 'green' ? 'active' : ''}`}></div>
			</div>
		  );
		};

export default Home;
