====================
LFS Foundation Theme
====================

This is a responsive theme for `Django LFS <http://getlfs.com/>`_ using the
 `Foundation framework <http://foundation.zurb.com/>`_ version 6.
 
 Installation
============

Edit your ``buildout.cfg`` file and add ``lfs-theme-foundation`` to the
``eggs`` section::

    [buildout]
    ....
    eggs =
        django-lfs
        ...
        lfs-theme-foundation

Also, you can clone the github repository and run it form a local directory instead::

    [buildout]
    ....
    develop =
        src/lfs-theme-foundation
    eggs =
        django-lfs
        ...
        lfs-theme-foundation


Modify your ``settings.py``
---------------------------

Add ``lfs_theme_foundation to ``INSTALLED_APPS`` to the top of the list::

.. code:: python

    INSTALLED_APPS = (
        'lfs_compropago',
        ...
        'lfs_theme',
        ...
    )

Restart Django.
