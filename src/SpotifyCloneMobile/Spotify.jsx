import React, { useEffect, useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "./spotify.css";
import imgpath from "../assets/1200x1200bb.jpg";
import audioFile from "../assets/Internet(PagalWorlld.Com).mp3";
const Spotify = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [percentMusic, setPercentMusic] = useState(0);
	const [audio, setAudio] = useState();
	const newaudio = new Audio(audioFile);
	useEffect(() => {
		setAudio(newaudio);
	}, []);
	useEffect(() => {
		if (percentMusic < 425 && isPlaying) {
			setTimeout(() => {
				setPercentMusic(percentMusic + 1.1);
			}, [1000]);
		} else if (percentMusic >= 425) {
			setPercentMusic(0);
			setIsPlaying(!isPlaying);
		}
	}, [percentMusic, isPlaying]);
	const playMusic = () => {
		if (!isPlaying) {
			audio.play();
		} else {
			audio.pause();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="player">
			<div className="topbar">
				<KeyboardArrowDownIcon />
				<div className="search">
					<p className="topPara">PLAYING FROM SEARCH</p>
					<p>"ja+ja+ke+kahan+" in Search</p>
				</div>
				<MoreVertIcon />
			</div>
			<img src={imgpath} width={480} height={480} alt="Music playing" />
			<div className="musicName">
				<h4>Internet</h4>
				<p>Satinder Sartaaj</p>
			</div>

			<div className="bottom">
				<div className="progressBar">
					<span
						style={{
							width: percentMusic,
							backgroundColor: percentMusic < 100 ? "green" : "red",
							left: 0,
						}}
					></span>
					<span
						style={{ width: 425 - percentMusic, left: percentMusic }}
					></span>
					<div
						className="dot"
						style={{
							left: `${percentMusic}px`,
							backgroundColor: percentMusic < 100 ? "green" : "red",
						}}
					></div>
					<div className="time">
						<p>0:00</p>
						<p>3:53</p>
					</div>
				</div>
				<div className="playPauseIcon">
					<ShuffleIcon />
					<SkipPreviousIcon />
					{!isPlaying ? (
						<PlayCircleIcon onClick={playMusic} />
					) : (
						<PauseCircleIcon onClick={playMusic} />
					)}
					<SkipNextIcon />
					<RemoveCircleOutlineIcon />
				</div>
			</div>
		</div>
	);
};

export default Spotify;
