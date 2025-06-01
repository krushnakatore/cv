import React, { useState } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

export const Timeline = ({ experiences, theme }) => {
    const [showMoreStates, setShowMoreStates] = useState({});

    const toggleShowMore = (index) => {
        setShowMoreStates((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <VerticalTimeline animate={true} lineColor={theme.accentBright}>
            {experiences?.map((exp, index) => {
                const showMore = showMoreStates[index] || false;
                return (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: theme.projectCard,
                            color: theme.text,
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            borderRadius: '10px',
                        }}
                        contentArrowStyle={{ borderRight: `7px solid ${theme.accentColor}` }}
                        date={exp.duration}
                        iconStyle={{ background: theme.accentColor, color: theme.text }}
                        icon={<img src={exp?.logo_path} alt={""} className="timeline-icon" />}
                    >
                        <h3 style={{ color: theme.text }}>{exp.title}</h3>
                        <h4 style={{ color: theme.secondaryText }}>{exp.company}</h4>
                        <p style={{ color: theme.text }}>{exp.location}</p>
                        {showMore && (
                            <ul style={{ color: theme.secondaryText }}>
                                {exp.description.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        )}
                        <button
                            onClick={() => toggleShowMore(index)}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: theme.accentBright,
                                color: theme.text,
                                padding: '5px 10px',
                                borderRadius: '5px',
                                marginTop: '10px',
                                border: 'none',
                            }}
                        >
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    );
};

export default Timeline;
