interface Props {
  date: Date;
  summary: string;
}

export function DaySummary({ date, summary }: Props) {
  return (
    <div>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={date.toISOString()}>
          {date.toLocaleDateString('fr-FR', {
            // weekday: 'long',
            day: 'numeric',
            month: 'long',
            // year: 'numeric'
          })}
        </time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {summary}
      </p>
    </div>
  );
} 