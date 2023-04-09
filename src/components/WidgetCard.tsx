import React, {FC, ReactElement, ReactNode} from 'react';
import {Button} from "asma-antrd";

interface WidgetCardProps {
    icon: ReactElement,
    titleWidget: string,
    titleButton: string,
    titleEmpty?: string,
    children?: ReactNode,
}

const WidgetCard: FC<WidgetCardProps> = ({
                                             icon,
                                             titleWidget,
                                             titleButton,
                                             titleEmpty,
                                             children
                                         }) => {
    return (
        <div className={'flex flex-col gap-2 rounded-lg bg-white py-5 px-8 shadow-cardbox'}>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    {icon}
                    <span className={'pl-4 text-lg leading-6 text-black'}>{titleWidget}</span>
                </div>
                <div className='flex gap-3 shadow-md transition-opacity'>
                    <Button
                        btnType='secondary'
                        size='small'
                        className='px-3 rounded-md py-1 text-custom-green border border-custom-green hover:bg-custom-green hover:text-white transition-all'
                        onClick={() => console.log('click Button')}
                    >
                        {titleButton}
                    </Button>
                </div>
            </div>
            {!children ?
                <div className='flex items-center justify-center text-xl leading-6 text-black py-5'>{titleEmpty}</div>
                :
                <div>{children}</div>
            }

            <button
                className={'m-auto justify-self-center text-sm text-custom-green cursor-pointer hover:text-teal-400'}
                onClick={()=>console.log('see all')}
            >
                see all
            </button>
        </div>
    );
};

export default WidgetCard;