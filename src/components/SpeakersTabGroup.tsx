import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { useEffect, useState } from 'react';
import type { CollectionEntry } from 'astro:content';
import type { ProcessedDay } from '../utils/get-days';
import type { ReactElement } from 'react';
import SpeakerImage from "./SpeakerImage.astro";

interface Props {
  days: ProcessedDay[];
}


export function SpeakersTabGroup({ days }: Props) {
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
      vertical={tabOrientation === 'vertical'}
    >
      <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
        <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
        <TabList className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
          {({ selectedIndex }) => (
            <>
              {days.map((day, dayIndex) => (
                <div key={day.date.toISOString()} className="relative lg:pl-8">
                  <svg
                    aria-hidden="true"
                    className={
                      dayIndex === selectedIndex
                        ? 'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-blue-600 stroke-blue-600'
                        : 'absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-slate-400'
                    }
                    viewBox="0 0 6 6"
                  >
                    <path d="M3 0L6 3L3 6L0 3Z" strokeWidth={2} strokeLinejoin="round" />
                  </svg>
                  <div className="relative">
                    <div
                      className={
                        dayIndex === selectedIndex
                          ? 'font-mono text-sm text-blue-600'
                          : 'font-mono text-sm text-slate-500'
                      }
                    >
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.name}
                      </Tab>
                    </div>
                    <time
                      dateTime={day.date.toISOString()}
                      className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                    >
                      {day.date.toLocaleDateString('fr-FR', {
                        // weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        // year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              ))}
            </>
          )}
        </TabList>
      </div>
      <TabPanels className="lg:col-span-3">
        {days.map((day) => (
          <TabPanel
            key={day.date.toISOString()}
            className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
            unmount={false}
          >
            {day.timeSlots
              .map(slot => slot.speaker)
              .filter((speaker): speaker is NonNullable<typeof speaker> => speaker !== null)
              .map((speaker, speakerIndex) => (
                <div key={speaker.name}>
                  <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                    <div
                      className={
                        `absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6 ${
                          ['border-blue-300', 'border-indigo-300', 'border-sky-300'][
                            speakerIndex % 3
                          ]
                        }`
                      }
                    />
                    <div className="absolute inset-0 bg-indigo-50">
                      <img
                        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                        src={speaker.image.src}
                        alt={speaker.name}
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                    {speaker.name}
                  </h3>
                  <p className="mt-1 text-base tracking-tight text-slate-500">
                    {speaker.role}
                  </p>
                </div>
              ))}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
} 