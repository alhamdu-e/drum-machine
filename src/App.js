import "./App.css";
import React from "react";
// import { useState } from "react";

function App() {
	const play = (id) => {
		const audio = document.getElementById(id);
		audio.play();
	};

	const keyboardEvent = (event) => {
		if (event.key === "q" || event.key === "Q") {
			play("Q");
		} else if (event.key === "w" || event.key === "W") {
			play("W");
		} else if (event.key === "e" || event.key === "E") {
			play("E");
		} else if (event.key === "a" || event.key === "A") {
			play("A");
		} else if (event.key === "s" || event.key === "S") {
			play("S");
		} else if (event.key === "d" || event.key === "D") {
			play("D");
		} else if (event.key === "z" || event.key === "Z") {
			play("Z");
		} else if (event.key === "x" || event.key === "X") {
			play("X");
		} else if (event.key === "c" || event.key === "C") {
			play("C");
		} else if (event.key === "r" || event.key === "R") {
			play("R");
		} else if (event.key === "t" || event.key === "T") {
			play("T");
		} else if (event.key === "y" || event.key === "Y") {
			play("Y");
		} else if (event.key === "U" || event.key === "u") {
			play("U");
		} else if (event.key === "I" || event.key === "i") {
			play("I");
		} else if (event.key === "o" || event.key === "O") {
			play("O");
		} else if (event.key === "p" || event.key === "P") {
			play("P");
		} else if (event.key === "f" || event.key === "F") {
			play("F");
		} else if (event.key === "g" || event.key === "G") {
			play("G");
		} else if (event.key === "H" || event.key === "h") {
			play("H");
		} else if (event.key === "J" || event.key === "J") {
			play("J");
		} else if (event.key === "K" || event.key === "k") {
			play("K");
		} else if (event.key === "l" || event.key === "L") {
			play("L");
		} else if (event.key === "v" || event.key === "V") {
			play("V");
		} else if (event.key === "B" || event.key === "b") {
			play("B");
		} else if (event.key === "N" || event.key === "n") {
			play("N");
		} else if (event.key === "M" || event.key === "m") {
			play("M");
		}
	};
	document.addEventListener("keypress", keyboardEvent);
	return (
		<div className="App">
			<div id="drum-machine">
				<h1>You Can use your Keyboard to play</h1>
				<div className="cont">
					<button className="drum-pad" id="heater-1" onClick={() => play("Q")}>
						Q
						<audio
							id="Q"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
					</button>
					<button className="drum-pad" id="heater-2" onClick={() => play("W")}>
						W
						<audio
							id="W"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
					</button>
					<button className="drum-pad" id="heater-3" onClick={() => play("E")}>
						E
						<audio
							className="clip"
							id="E"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
					</button>
					<button className="drum-pad" id="heater-4" onClick={() => play("R")}>
						R
						<audio
							id="R"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
					</button>
					<button className="drum-pad" id="clap" onClick={() => play("T")}>
						T
						<audio
							id="T"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
					</button>
					<button className="drum-pad" id="open-hh" onClick={() => play("Y")}>
						<audio
							id="Y"
							src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
						Y
					</button>
					<button
						className="drum-pad"
						id="kick-n-hat"
						onClick={() => play("U")}>
						U
						<audio
							id="U"
							src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
					</button>
					<button className="drum-pad" id="kick" onClick={() => play("I")}>
						<audio
							id="I"
							src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
						I
					</button>
					<button className="drum-pad" id="closed-hh" onClick={() => play("O")}>
						<audio
							id="O"
							src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
						O
					</button>

					<button className="drum-pad" id="heater-1" onClick={() => play("P")}>
						P
						<audio
							id="P"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
					</button>
					<button className="drum-pad" id="heater-2" onClick={() => play("A")}>
						A
						<audio
							id="A"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
					</button>
					<button className="drum-pad" id="heater-3" onClick={() => play("S")}>
						S
						<audio
							className="clip"
							id="S"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
					</button>
					<button className="drum-pad" id="heater-4" onClick={() => play("D")}>
						D
						<audio
							id="D"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
					</button>
					<button className="drum-pad" id="clap" onClick={() => play("F")}>
						F
						<audio
							id="F"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
					</button>
					<button className="drum-pad" id="open-hh" onClick={() => play("G")}>
						<audio
							id="G"
							src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
						G
					</button>
					<button
						className="drum-pad"
						id="kick-n-hat"
						onClick={() => play("H")}>
						H
						<audio
							id="H"
							src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
					</button>
					<button className="drum-pad" id="kick" onClick={() => play("J")}>
						<audio
							id="J"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
						J
					</button>
					<button className="drum-pad" id="closed-hh" onClick={() => play("K")}>
						<audio
							id="K"
							src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
						K
					</button>

					<button className="drum-pad" id="heater-1" onClick={() => play("L")}>
						L
						<audio
							id="L"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
					</button>
					<button className="drum-pad" id="heater-2" onClick={() => play("Z")}>
						Z
						<audio
							id="Z"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
					</button>
					<button className="drum-pad" id="heater-3" onClick={() => play("X")}>
						X
						<audio
							className="clip"
							id="X"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
					</button>
					<button className="drum-pad" id="heater-4" onClick={() => play("C")}>
						C
						<audio
							id="C"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
					</button>
					<button className="drum-pad" id="clap" onClick={() => play("V")}>
						V
						<audio
							id="V"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
					</button>
					<button className="drum-pad" id="open-hh" onClick={() => play("B")}>
						<audio
							id="B"
							src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
						B
					</button>
					<button
						className="drum-pad"
						id="kick-n-hat"
						onClick={() => play("N")}>
						N
						<audio
							id="N"
							src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
					</button>
					<button className="drum-pad" id="kickm" onClick={() => play("M")}>
						<audio
							id="M"
							src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
						M
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
