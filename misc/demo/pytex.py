from pylatex import Document, Section, Subsection, Command, Package
from pylatex.utils import NoEscape

# Create a document object
doc = Document(documentclass='article', document_options='a4paper,12pt')

# Add packages
doc.packages.append(Package('inputenc', options='utf8'))
doc.packages.append(Package('hyperref'))
doc.packages.append(Package('array'))
doc.packages.append(Package('lastpage'))
doc.packages.append(Package('lipsum'))
doc.packages.append(Package('boldline'))
doc.packages.append(Package('tabularx'))
doc.packages.append(Package('colortbl'))
doc.packages.append(Package('fancyhdr'))
doc.packages.append(Package('xltabular'))
doc.packages.append(Package('amssymb'))
doc.packages.append(Package('graphicx'))
doc.packages.append(Package('geometry', options='hmargin=2cm,top=5.5cm,headheight=130pt,footskip=55pt'))
doc.packages.append(Package('amsthm'))
doc.packages.append(Package('mhchem', options='version=4'))

# Set up theorem styles and environments
doc.preamble.append(NoEscape(r'\theoremstyle{definition}'))
doc.preamble.append(NoEscape(r'\newtheorem{theorem}{REQ}'))
doc.preamble.append(NoEscape(r'''
\newcount\savedtheorem
\newenvironment{subtheorems}{%
  \savedtheorem=\value{theorem}%
  \edef\prevthetheorem{\thetheorem}%
  \setcounter{theorem}{0}%
  \renewcommand\thetheorem{\prevthetheorem.\arabic{theorem}}%
}
{%
  \setcounter{theorem}{\savedtheorem}%
}
'''))

# Add custom colors and styles
doc.preamble.append(NoEscape(r'\definecolor{gray}{cmyk}{0.05,0.05,0.05,0.05}'))
doc.preamble.append(NoEscape(r'\renewcommand{\familydefault}{\sfdefault}'))

# Set up hyperref options
doc.preamble.append(NoEscape(r'''
\hypersetup{
    colorlinks=true,
    linkcolor=blue,
    filecolor=magenta,      
    urlcolor=cyan,
}
'''))

# Set up the fancyhdr package
doc.preamble.append(NoEscape(r'''
\pagestyle{fancy}
\renewcommand{\headrulewidth}{0pt}
\fancyhead[CE,CO,LE,LO,RE,RO]{}
\fancyhead[C]{%
           \begin{flushleft}
          \includegraphics[height=2.5cm,width=2.5cm]{Edwards_Lifesciences_logo.png}
          \end{flushleft}
          \bgroup
          \def\arraystretch{1.5}% 
          \begin{tabular}{|l|l|l|l|}
            \hline
            \multicolumn{4}{|c|}{
                \textbf{Title: title\_placeholder}
            } \\ 
            \hline
            {\footnotesize Revision Date: revision\_date\_placeholder} & 
            {\footnotesize Author: author\_placeholder} &
            {\footnotesize Version: 1} & 
            {\footnotesize Page: \thepage \hspace{1pt} of \pageref*{LastPage}} \\ 
            \hline
          \end{tabular}%
          \egroup
}
\fancyfoot[c]{\small{THIS DOCUMENT CONTAINS CONFIDENTIAL AND PROPRIETARY INFORMATION OF EDWARDS LIFESCIENCES, LLC. IT MUST NOT BE REPRODUCED OR DISCLOSED TO THIRD PARTIES WITHOUT PRIOR 
WRITTEN PERMISSION OF EDWARDS LIFESCIENCES, LLC. }}
'''))

# Create the content of the document
with doc.create(Section('Vision')):
    doc.append('hello')

# Generate the document
doc.generate_pdf('document', clean_tex=False)