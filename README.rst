====================
LFS Foundation Theme
====================

This is a responsive theme for `Django LFS <http://getlfs.com/>`_ using the
 `Foundation framework <http://foundation.zurb.com/>`_ version 6.
 
Package Installation
====================

With buildout
-------------

Edit your ``buildout.cfg`` file and add ``lfs-theme-foundation`` to the
``eggs`` section:

.. code:: ini

    [buildout]
    ....
    eggs =
        django-lfs
        ...
        lfs-theme-foundation

Also, you can clone the github repository and run it form a local directory
instead:

.. code:: ini

    [buildout]
    ....
    develop =
        src/lfs-theme-foundation
    eggs =
        django-lfs
        ...
        lfs-theme-foundation

Finally run buildout to download and install:

.. code:: bash

    bin/buildout


With pip
--------

.. code:: bash
    
    pip install lfs-theme-foundation

You might also want to add it to your ``requirements.txt`` file.


As developer (Git Version)
--------------------------

These instructions are for you if somehow you want to work directly
with the git version (maybe to send patches??).

Clone the repo and install it locally.

.. code:: bash

    git clone git@github.com:misaelnieto/lfs-theme-foundation.git
    pip install -e lfs-theme-foundation


Django installation
===================

Modify your Django's ``settings.py``

Add ``lfs_theme_foundation`` to the top of the ``INSTALLED_APPS`` list so that
``lfs_theme`` lies below ``lfs_theme_foundation``:

.. code:: python

    INSTALLED_APPS = (
        'lfs_theme_foundation',
        ...
        'lfs_theme',
        ...
    )

Restart Django.


Working with static assets
==========================

Normally, you shouldn't need to compile the SCCS files.


To compile assets you need node.js installed. Once you have nodejs and npm
installed open the folder in your command line, and install the needed
dependencies:

.. code:: bash
    cd lfs-theme-foundation
    npm install
    bower install

Finally, run ``npm start`` to run the Sass compiler. It will re-run every time
you save a Sass file.

You can also use the foundation-cli if you want:

.. code:: bash

    cd lfs-theme-foundation
    npm install
    bower install
    npm install foundation-cli --global
    foundation build
    foundation watch

