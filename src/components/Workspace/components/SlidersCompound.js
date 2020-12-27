import { Slider, Typography } from '@material-ui/core';
import React from "react"
import "./SlidersCompound.css"

export const SlidersCompound = () => {

    function valuetext(value) {
        return `${value}^@`;
    }

    return (
        <React.Fragment>
            <div className="sliders-wrapper">
            <Typography id="discrete-slider-small-steps" gutterBottom>
                Small steps
            </Typography>
            <Slider
                defaultValue={50}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-small-steps"
                step={5}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
            />
            <Typography id="discrete-slider-small-steps" gutterBottom>
                Small steps
            </Typography>
            <Slider
                defaultValue={50}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-small-steps"
                step={10}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
            />
            <Typography id="discrete-slider-small-steps" gutterBottom>
                Small steps
            </Typography>
            <Slider
                defaultValue={50}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-small-steps"
                step={10}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
            />
            <Typography id="discrete-slider-small-steps" gutterBottom>
                Small steps
            </Typography>
            <Slider
                defaultValue={50}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-small-steps"
                step={10}
                marks
                min={0}
                max={100}
                valueLabelDisplay="auto"
            />  

            </div>
        </React.Fragment>
    )
} 