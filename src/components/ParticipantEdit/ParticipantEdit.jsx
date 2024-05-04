import { Grid, Box, Table, IconButton, TextField } from '@radix-ui/themes'
import { Cross1Icon } from '@radix-ui/react-icons'
import { useState } from 'react'

export default function ParticipantEdit({ participant }) {

  return (
    <>
      <Table.Row>
        <Table.Cell px='0'>
          <Grid
            columns='2'
            rows='1'
            gapX='3'
            align='center'
            style={{ gridTemplateColumns: '1fr minmax(auto, auto) ' }}
          >
            <Box>
              <TextField.Root
                size='3'
                defaultValue={participant}
                />
            </Box>
            <Box align='end'>
              <IconButton variant='ghost'>
                <Cross1Icon height='18px' width='18px' />
              </IconButton>
            </Box>
          </Grid>
        </Table.Cell>
      </Table.Row>
    </>

  )
}
