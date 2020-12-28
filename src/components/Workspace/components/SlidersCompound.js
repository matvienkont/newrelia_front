import { Slider, Typography, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from "react"
import "./SlidersCompound.css"

export const SlidersCompound = (props) => {
    var {
        checked,
        setChecked,
        pooling,
        setPooling,
        setCntWeight,
        setStyleWeight,
        setTVWeight,
        setTemporalWeight
    } = props;

    const handleChangeColors = (event) => {
        setChecked(event.target.checked);
        console.log(checked);
    };

    const handleChangePooling = (event) => {
        setPooling(event.target.value);
    };

    const handleChangeCntWeight = (event, newValue) => {
        setCntWeight(newValue);
    };
    
    const handleChangeStyleWeight = (event, newValue) => {
        const MULTIPLIER = 1000;
        setStyleWeight(newValue*MULTIPLIER);
    };

    const handleChangeTVWeight = (event, newValue) => {
        const DIVIDER = 1000;
        setTVWeight(newValue/DIVIDER);
    };

    const handleChangeTmpWeight = (event, newValue) => {
        setTemporalWeight(newValue);
    };

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectContainer: {
            display: "flex",
            justifyContent: "center"
        }
      }));

    const classes = useStyles();

    function valuetext(value) {
        return `${value}^@`;
    };

    return (
        <React.Fragment>
            <div className="sliders-wrapper">
                <Typography id="discrete-slider-small-steps" gutterBottom>
                    Content weight
                </Typography>
                <Slider
                    onChangeCommitted={handleChangeCntWeight}
                    defaultValue={5}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-small-steps"
                    step={1}
                    marks
                    min={1}
                    max={20}
                    valueLabelDisplay="auto"
                />
                <Typography id="discrete-slider-small-steps" gutterBottom>
                    Style weight
                </Typography>
                <Slider
                    onChangeCommitted={handleChangeStyleWeight}
                    defaultValue={10}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-small-steps"
                    step={1}
                    marks
                    min={0.5}
                    max={100}
                    valueLabelDisplay="auto"
                />
                <Typography id="discrete-slider-small-steps" gutterBottom>
                    TV weight
                </Typography>
                <Slider
                    onChangeCommitted={handleChangeTVWeight}
                    defaultValue={1}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-small-steps"
                    step={0.01}
                    marks
                    min={0.5}
                    max={5}
                    valueLabelDisplay="auto"
                />
                <Typography id="discrete-slider-small-steps" gutterBottom>
                    Temporal weight
                </Typography>
                <Slider
                    onChangeCommitted={handleChangeTmpWeight}
                    defaultValue={200}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-small-steps"
                    step={10}
                    marks
                    min={10}
                    max={1000}
                    valueLabelDisplay="auto"
                />
                <div className="orig-col-checkbox-container">
                    <Typography id="discrete-slider-small-steps">
                        Original colors
                    </Typography>
                    <Checkbox
                        checked={checked}
                        onChange={handleChangeColors}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div>
                <div className={classes.selectContainer}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Pooling</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={pooling}
                        onChange={handleChangePooling}
                        >
                        <MenuItem value="avg">Avg</MenuItem>
                        <MenuItem value="max">Max</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </React.Fragment>
    )
} 