[indent=2]
/*
  Genie GTK+ hello
  valac --pkg gtk+-3.0 hello-gtk.gs
  ./hello-gtk
*/
uses Gtk

init
    Gtk.init (ref args)
    var window = new Window (WindowType.TOPLEVEL)
    var label = new Label("Hello, World!")
    window.window_position = WindowPosition.CENTER
    window.add(label)
    window.set_default_size(160, 100)
    window.show_all()
    window.destroy.connect(Gtk.main_quit)
    Gtk.main()
