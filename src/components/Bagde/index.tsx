import React from "react";

type BadgeProps = {
  children: React.ReactNode;
};
export function SuccessBadge({ children }: BadgeProps) {
  return (
    <div className="flex flex-col text-bs text-success font-bold items-center justify-center rounded-md bg-lightsuccess px-2.5 py-0.5 h-auto">
      {children}
    </div>
  );
}
export function DangerBadge({ children }: BadgeProps) {
  return (
    <div className="flex flex-col text-bs text-danger font-bold items-center justify-center rounded-xl bg-lightdanger px-2.5 py-0.5 h-auto">
      {children}
    </div>
  );
}
export function CommonBadge({ children }: BadgeProps) {
  return (
    <div className="flex flex-col text-bs text-formtext font-bold items-center justify-center rounded-xl bg-lightform px-2.5 py-0.5 h-auto">
      {children}
    </div>
  );
}
