import React, { useState } from 'react';

import FullNameField from './components/fullname';
import EmailField from './components/email';
import PhoneNumberField from './components/phone-number';
import SalaryIndicatorField from './components/salary-indicator';

import FormManager from './components/form-manager';
import Summary from './components/summary';
import Progress from './components/progress';

const STEPS = [
  {
    component: FullNameField,
    label: 'Full name',
    value: '',
    buttonLabel: 'Next',
  },
  {
    component: EmailField,
    label: 'Email',
    value: '',
    buttonLabel: 'Next',
  },
  {
    component: PhoneNumberField,
    label: 'Phone number',
    value: '',
    buttonLabel: 'Next',
  },
  {
    component: SalaryIndicatorField,
    label: 'Salary',
    value: '',
    buttonLabel: 'Next',
  },
];

export default (_props) => {
  const [step, setStep] = useState(0);
  const [response, setResponse] = useState([]);

  function handleChange(value) {
    setResponse([
      ...response,
      { ...STEPS[step], value },
    ]);

    if (step + 1 === STEPS.length) {
      setStep(-1);
    } else {
      setStep(step + 1);
    }
  }

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      { step !== -1 && step < STEPS.length
        ? (
          <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-right align-items-sm-center">
            <FormManager
              component={STEPS[step].component}
              value={STEPS[step].value}
              buttonLabel={STEPS[step].buttonLabel}
              onChange={(value) => handleChange(value)}
            />
            <Progress done={step / STEPS.length} />
          </div>
        )
        : (
          <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-right align-items-sm-center">
            <Summary values={response} />
            <Progress done={1} />
          </div>
        )}
    </div>
  );
};
