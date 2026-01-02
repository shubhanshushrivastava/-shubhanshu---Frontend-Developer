Visual Page Hierarchy Editor

A React-based application that visualizes a website page hierarchy and allows reordering of Home page sections using drag and drop.

Features

Visual representation of a 3-level page hierarchy

Automatic layout using Dagre

Graph rendering using React Flow

Drag & drop reordering of Home page sections using DndKit

Save and load layout using localStorage

Export hierarchy as JSON

Clean and modular component structure

Built with Tailwind CSS

Tech Stack

React (Vite)

React Flow

Dagre

Dnd Kit

Tailwind CSS

JavaScript


How It Works
Page Hierarchy

Displays a predefined hierarchy:

Home

About, Services, Blog, Contact

Nested subpages under each section

Layout is generated automatically using Dagre.

Home Page Sections

Sections:

Hero

Features

Testimonials

CTA

Footer

Can be reordered using drag and drop.

Order is preserved when saved.

Persistence

Save → stores layout in localStorage

Load → restores saved layout

Export JSON → downloads the hierarchy structure

Notes

This project demonstrates:

Component-based architecture

State management

live link : https://assesment123.netlify.app/

Drag & drop interactions

Graph-based UI rendering

Clean and maintainable frontend structure
