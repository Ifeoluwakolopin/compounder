import React from "react";
import { Button } from "react-bootstrap";
import { VolumeUpFill, VolumeMuteFill } from "react-bootstrap-icons";
import { useMute } from "../contexts/MuteContext";

export default function VolumeButton() {
  const { isMuted, toggleMute } = useMute();

  return (
    <Button onClick={toggleMute} variant="primary">
      {isMuted ? <VolumeMuteFill /> : <VolumeUpFill />}
    </Button>
  );
}
