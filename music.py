import pretty_midi
import matplotlib.pyplot as plt
import librosa
import librosa.display
import numpy as np


def plot_piano_roll(pm, start_pitch, end_pitch, fs=100):
    # Use librosa's specshow function for displaying the piano roll
    librosa.display.specshow(pm.get_piano_roll(fs)[start_pitch:end_pitch],
                             hop_length=1, sr=fs, x_axis='time', y_axis='cqt_note',
                             fmin=pretty_midi.note_number_to_hz(start_pitch))

# plt.figure(figsize=(8, 4))
# plot_piano_roll(pm, 56, 70)
# Note the blurry section between 1.5s and 2.3s - that's the pitch bending up!


# Load MIDI file into PrettyMIDI object
pm = pretty_midi.PrettyMIDI('acoustic.mid')
# Let's look at what's in this MIDI file
print('There are {} time signature changes'.format(len(pm.time_signature_changes)))
print('There are {} instruments'.format(len(pm.instruments)))
print(pm.instruments)

# print('Instrument 3 has {} notes'.format(len(pm.instruments[0].notes)))
print('Instrument 1 has {} pitch bends'.format(len(pm.instruments[0].pitch_bends)))
print('Instrument 1 has {} control changes'.format(len(pm.instruments[0].control_changes)))

# Plot a pitch class distribution - sort of a proxy for key
plt.bar(np.arange(12), pm.get_pitch_class_histogram())
plt.xticks(np.arange(12), ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'])
plt.xlabel('Note')
plt.ylabel('Proportion')
plt.show()