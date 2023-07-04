import React, { useEffect, useState } from 'react';

const RecipieInstruction = ({ instructions }) => {
    const [steps, setSteps] = useState([]);

    useEffect(() => {
        const splitSteps = () => {
            const trimmedInstructions = instructions.trim();
            const splitChar = trimmedInstructions.includes('\r\n\r\n') ? '\r\n\r\n' : '. ';
            const steps = trimmedInstructions.split(splitChar).map((step) => step.trim());
            return steps;
        };

        setSteps(splitSteps());
    }, [instructions]);

    return (
        <div>
            {steps.length ? (
                <ol>
                    {steps.map((step, index) => (
                        <li key={index} className="p-1">
                            {step}
                        </li>
                    ))}
                </ol>
            ) : (
                instructions
            )}
        </div>
    );
};

export default RecipieInstruction;
