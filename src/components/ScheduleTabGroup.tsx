import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import type { ProcessedDay } from '../utils/get-days';
import { DaySummary } from './DaySummary';
import { TimeSlots } from './TimeSlots';

interface Props {
  days: ProcessedDay[];
}

export function ScheduleTabGroup({ days }: Props) {
  return (
    <TabGroup as="div" className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2">
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {days.map((day) => (
          <div key={day.date.toISOString()} className="relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0">
            <Tab className="ui-not-focus-visible:outline-none">
              <DaySummary date={day.date} summary={day.summary} />
            </Tab>
          </div>
        ))}
      </TabList>
      <TabPanels>
        {days.map((day) => (
          <TabPanel key={day.date.toISOString()} className="ui-not-focus-visible:outline-none">
            <TimeSlots 
              timeSlots={day.timeSlots}
              date={day.date}
              className="mt-10"
            />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
} 