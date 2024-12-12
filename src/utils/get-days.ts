import type { CollectionEntry } from 'astro:content';
import { getEntry, getCollection } from 'astro:content';

type DayData = CollectionEntry<'days'>['data'];
type TimeSlot = DayData['timeSlots'][number];

export type ProcessedTimeSlot = Omit<TimeSlot, 'speaker'> & {
  speaker: CollectionEntry<'speakers'>['data'] | null;
};

export type ProcessedDay = Omit<DayData, 'timeSlots'> & {
  timeSlots: ProcessedTimeSlot[];
};

export async function getDays() {
  const days = await getCollection('days');
  
  return Promise.all(
    days.map(async (day) => {
      const processedTimeSlots = await Promise.all(
        day.data.timeSlots.map(async (slot) => {
          const processed = {
            ...slot,
            speaker: slot.speaker ? (await getEntry(slot.speaker)).data : null
          };
          return processed;
        })
      );

      return {
        ...day.data,
        timeSlots: processedTimeSlots
      };
    })
  );
} 