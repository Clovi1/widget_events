import React, {FC} from 'react';
import WidgetCard from "./components/WidgetCard";
import {Icon} from "@iconify/react";
import TaskList from "./components/TaskList";

const App: FC = () => {
    return (
        <div className='bg-custom-gray-200 h-full flex justify-between'>
            <div className='w-56 bg-custom-green hidden lg:block'></div>
            <div className='w-full px-6 flex flex-col'>
                <div className='h-14 mb-5'></div>
                <div className='h-14 mb-5 bg-custom-green-100'></div>
                <div className='mb-5'>
                    <WidgetCard
                        icon={<Icon width={24} height={24} icon={'material-symbols:mark-unread-chat-alt-outline'}/>}
                        titleWidget={'Kartlegging'}
                        titleButton={'Start chat'}
                        titleEmpty={'No Messages'}
                    >
                    </WidgetCard>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full mr-5 mb-5'>
                        <WidgetCard
                            icon={<Icon width={24} height={24} icon={'fluent:tasks-app-20-filled'}/>}
                            titleWidget={'Oppgaver'}
                            titleButton={'Opprett ny oppgave'}
                            titleEmpty={'No Tasks'}
                        >
                        </WidgetCard>
                    </div>
                    <div className='w-full mb-5'>
                        <WidgetCard
                            icon={<Icon width={24} height={24} icon={'material-symbols:calendar-month'}/>}
                            titleWidget={'Hendelser'}
                            titleButton={'Ny avtale'}
                            titleEmpty={'No Tasks'}
                        >
                            <TaskList/>
                        </WidgetCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;