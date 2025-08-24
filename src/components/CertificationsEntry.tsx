import { Certificate } from '@/data/portfolioData';
import React from 'react';

interface CertificationsEntryProps {
    certification: Certificate;
    themeClasses: { [key: string]: string };
  }

export const CertificationsEntry = ({ certification, themeClasses }:CertificationsEntryProps) => {
    return (
      <div className="space-y-1">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-semibold font-mono">{certification.name}</h3>
          <p className={`text-sm tabular-nums font-mono ${themeClasses.subtext}`}>{certification.year}</p>
        </div>
        <p className={`font-mono text-sm leading-none ${themeClasses.subtext}`}>
          {certification.issuer}
        </p>
      </div>
    );
  };