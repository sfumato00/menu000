import clsx from 'clsx';
import React from 'react';

const Label = ({
                   children,
                   animateRerendering,
                   color,
               }: {
    children: React.ReactNode;
    animateRerendering?: boolean;
    color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
}) => {
    return (
        <div
            className={clsx('rounded-full px-1.5 shadow-[0_0_1px_3px_black]', {
                'bg-gray-800 text-gray-300': color === 'default',
                'bg-burger-pink text-white': color === 'pink',
                'bg-burger-blue text-white': color === 'blue',
                'bg-burger-cyan text-white': color === 'cyan',
                'bg-burger-violet text-violet-100': color === 'violet',
                'bg-burger-orange text-white': color === 'orange',
                'animate-[highlight_1s_ease-in-out_1]': animateRerendering,
            })}
        >
            {children}
        </div>
    );
};
export const Boundary = ({
                             children,
                             labels = ['children'],
                             size = 'default',
                             color = 'default',
                             animateRerendering = true,
                         }: {
    children: React.ReactNode;
    labels?: string[];
    size?: 'small' | 'default';
    color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange';
    animateRerendering?: boolean;
}) => {
    return (
        <div
            className={clsx('relative rounded-lg border border-dashed', {
                'p-3 lg:p-5': size === 'small',
                'p-4 lg:p-9': size === 'default',
                'border-gray-700': color === 'default',
                'border-burger-pink': color === 'pink',
                'border-burger-blue': color === 'blue',
                'border-burger-cyan': color === 'cyan',
                'border-burger-violet': color === 'violet',
                'border-burger-orange': color === 'orange',
                'text-burger-pink animate-[rerender_1s_ease-in-out_1]':
                animateRerendering,
            })}
        >
            <div
                className={clsx(
                    'absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest',
                    {
                        'left-3 lg:left-5': size === 'small',
                        'left-4 lg:left-9': size === 'default',
                    },
                )}
            >
                {labels.map((label) => {
                    return (
                        <Label
                            key={label}
                            color={color}
                            animateRerendering={animateRerendering}
                        >
                            {label}
                        </Label>
                    );
                })}
            </div>

            {children}
        </div>
    );
};
