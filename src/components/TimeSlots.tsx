import type { ProcessedTimeSlot } from '../utils/get-days';

interface Props {
  timeSlots: ProcessedTimeSlot[];
  date: Date;
  className?: string;
}

export function TimeSlots({ timeSlots, date, className }: Props) {
  return (
    <ol
      role="list"
      className={`${className} space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur`}
    >
      {timeSlots?.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.speaker?.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.speaker?.name || 'TBA'}
          </h4>
          {timeSlot.description && (
            <>
              <p className="mt-1 font-mono text-sm text-blue-600">
                {timeSlot.type}
              </p>
              <p className="mt-1 tracking-tight text-blue-900">
                {timeSlot.description}
              </p>
            </>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${date.toISOString().split('T')[0]}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${date.toISOString().split('T')[0]}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  );
} 