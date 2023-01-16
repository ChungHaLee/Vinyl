import numpy as np
import pretty_midi# For putting audio in the notebook

# Construct a PrettyMIDI object.
# We'll specify that it will have a tempo of 80bpm.
pm = pretty_midi.PrettyMIDI(initial_tempo=80)

inst_1 = pretty_midi.Instrument(program=42, is_drum=False, name='my cello')
inst_2= pretty_midi.Instrument(program=47, is_drum=False, name='my electric guitar')
pm.instruments.append(inst_1)
pm.instruments.append(inst_2)


# Let's add a few notes to our instrument
velocity = 100
for pitch, start, end in zip([60, 62, 64], [0.2, 0.6, 1.0], [1.1, 1.7, 2.3]):
    inst_1.notes.append(pretty_midi.Note(velocity, pitch, start, end))


velocity = 120
for pitch, start, end in zip([113, 115, 117], [5.1, 6.0, 8.0], [7.6, 8.9, 10.5]):
    inst_2.notes.append(pretty_midi.Note(velocity, pitch, start, end))


print('inst1 timbre', inst_1.program)
print('inst2 timbre', inst_2.program)


# # We'll just do a 1-semitone pitch ramp up
n_steps = 512
bend_range = 8192//2
for time, pitch in zip(np.linspace(1.5, 2.3, n_steps),
                       range(0, bend_range, bend_range//n_steps)):
    inst_1.pitch_bends.append(pretty_midi.PitchBend(pitch, time))


pm.write('output.mid')