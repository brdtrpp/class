Template.classSubmit.events({
    'submit form': function(e) {
        e.preventDefault();
        
        var klass = {
            title: $(e.target).find('[name=title]').val()
        };
        
        klass._id = Classes.insert(klass);
        Router.go('classPage', klass)
    }
})