import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import Button from 'components/Buttons/Button';
import HeadingSubtitle from 'components/Headings/HeadingSubtitle';

export default function SettingSection({
  title = 'Seçenekler',
  buttonTexts = ['Görev Ekle'],
  buttonFunctions = [() => {}],
  buttonIcons = [<QuestionMarkCircleIcon className="w-6" />],
}) {
  return (
    <>
      <HeadingSubtitle
        text={title}
        customClass="text-center lg:text-left text-indigo-900"
      />
      <div className="flex flex-wrap gap-x-1 justify-center lg:justify-start border-b border-gray-300">
        {buttonTexts.map((buttonText, index) => (
          <Button
            key={buttonText + index}
            text={buttonText}
            customStyleClass="my-2 w-40 text-indigo-500 hover:bg-indigo-600 hover:text-white"
            icon={
              buttonIcons[index] || <QuestionMarkCircleIcon className="w-6" />
            }
            onClick={
              buttonFunctions[index]
                ? buttonFunctions[index]
                : () => {
                    alert('Button Bosta');
                  }
            }
          />
        ))}
      </div>
    </>
  );
}
