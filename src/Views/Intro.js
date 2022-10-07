import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import DivCarousel from "../Components/Intro/DivCarousel";
import "../Assets/Styles/Intro.css"

export default function Intro() {
    const theme = useTheme();
    const stepsCount = 4
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="intro-box">
            <DivCarousel
                steps={stepsCount}
                activeStep={activeStep}
                template={
                
                }
            />
            <MobileStepper
                variant="dots"
                steps={this.steps}
                position="bottom"
                activeStep={activeStep}
                nextButton={
                    <Button size="large" onClick={handleNext} disabled={activeStep === 3}>
                        <KeyboardArrowRight/>
                    </Button>
                }
                backButton={
                    <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft/>
                    </Button>
                }
            />
        </div>
    );
}
