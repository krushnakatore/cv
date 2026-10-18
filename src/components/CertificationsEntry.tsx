import { Certificate } from '@/data/portfolioData';
import React from 'react';
import { ui } from '../styles/ui';

interface CertificationsEntryProps {
    certification: Certificate;
  }

export const CertificationsEntry = ({ certification }:CertificationsEntryProps) => {
    return (
      <div className="space-y-1">
        <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-semibold font-mono">{certification.name}</h3>
          <p className={`shrink-0 text-sm tabular-nums font-mono ${ui.subtext}`}>{certification.year}</p>
        </div>
        <p className={`font-mono text-sm leading-none ${ui.subtext}`}>
          {certification.issuer}
        </p>
      </div>
    );
  };