export function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-l-2 border-border pl-3">
      <span className="font-mono text-2xl font-medium text-fg font-tabular">{value}</span>
      <span className="text-xs text-fg-subtle uppercase tracking-wider">{label}</span>
    </div>
  );
}
