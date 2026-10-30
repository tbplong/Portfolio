# tbplong.github.io

Personal portfolio of Tran Bao Phuc Long. Plain HTML/CSS/JS, no build step.

## Edit content

Everything is in `index.html`. Each text has an English and a Vietnamese version
side by side (`lang="en"` / `lang="vi"`); update both.

## Add award photos

Put one photo per award in `assets/awards/` with these names
(`.jpg`, `.jpeg`, `.png` or `.webp`):

| Award | File |
| --- | --- |
| Comprehensive Excellent Student Award | `hcmut-excellent-student.jpg` |
| 1st Runner-Up, SkyTrack Hackathon 2026 | `skytrack-hackathon-2026.jpg` |
| Top 3, RMIT Hackathon 2026 | `rmit-hackathon-2026.jpg` |

Awards without a photo show text only. When previewing locally
(`python -m http.server`), empty slots show a dashed box with the file name.
A landscape photo around 1600×1200 px works best.

To add a new award, copy one `<article class="award">` block and give it a new
`data-photo` name.

## Update the CV

Replace `assets/Tran_Bao_Phuc_Long_CV.pdf`.

## Deploy

The repository must be named `tbplong.github.io`. Push to `main`, then in
Settings → Pages set Source to "Deploy from a branch", branch `main`, folder `/ (root)`.
