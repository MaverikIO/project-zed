import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from 'lib-platform'
import { Interface } from '@agape/types';


import { alchemy } from '@project-zed/lib-alchemy'
import { AuthGuard } from '../auth/auth.guard';

@Controller('api/events')
export class EventsController {
  constructor(private readonly service: EventService) {}


    @Get()
    @UseGuards(AuthGuard)
    async list() {
        const events = await this.service.list()

        const deflated = alchemy.deflate(Event, events)

        return deflated
    }

    @Post()
    @UseGuards(AuthGuard)
    create( @Body() payload: Interface<Event> ) {

        console.log("Create Event Payload", payload )

        const event = alchemy.inflate(Event, payload)

        console.log("Create Event event", event )

        return this.service.create( event )
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    async retrieve( @Param('id') id: string ) {

        const event = await this.service.retrieve(id)

        const dto = alchemy.deflate(Event, event)

        return dto
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    update( @Param('id') id: string, @Body() payload: Interface<Event>) {

        const event = alchemy.inflate(Event, payload)

        this.service.update(id, event)
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    delete( @Param('id') id: string ) {
        this.service.delete(id)
    }


}
