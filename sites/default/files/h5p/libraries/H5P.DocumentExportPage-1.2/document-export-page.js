var H5P = H5P || {};

/**
 * Document Export Page module
 * @external {jQuery} $ H5P.jQuery
 */
H5P.DocumentExportPage = (function ($, EventDispatcher) {
  // CSS Classes:
  var MAIN_CONTAINER = 'h5p-document-export-page';

  /**
   * Initialize module.
   * @param {Object} params Behavior settings
   * @param {Number} id Content identification
   * @returns {Object} DocumentExportPage DocumentExportPage instance
   */
  function DocumentExportPage(params, id) {
    EventDispatcher.call(this);
    this.id = id;

    this.inputArray = [];
    this.exportTitle = '';
    this.requiredInputsAreFilled = true;

    // Set default behavior.
    this.params = $.extend({}, {
      title: 'Document export',
      description: '',
      createDocumentLabel: 'Create document',
      selectAllTextLabel: 'Select all text',
      exportTextLabel: 'Export text',
      requiresInputErrorMessage: 'One or more required input fields need to be filled.',
      helpTextLabel: 'Read more',
      helpText: 'Help text'
    }, params);
  }

  DocumentExportPage.prototype = Object.create(EventDispatcher.prototype);
  DocumentExportPage.prototype.constructor = DocumentExportPage;

  /**
   * Attach function called by H5P framework to insert H5P content into page.
   *
   * @param {jQuery} $container The container which will be appended to.
   */
  DocumentExportPage.prototype.attach = function ($container) {
    var self = this;

    this.$wrapper = $container;

    this.$inner = $('<div>', {
      'class': MAIN_CONTAINER
    }).prependTo($container);

    var documentExportTemplate =
        '<div class="page-header" role="heading" tabindex="-1">' +
        ' <div class="page-title">{{{title}}}</div>' +
        ' <button class="page-help-text">{{{helpTextLabel}}}</button>' +
        '</div>' +
        '<div class="export-description">{{{description}}}</div>' +
        '<div class="export-footer">' +
        '<div role="button" tabindex="0" class="joubel-simple-rounded-button export-document-button" title="{{{createDocumentLabel}}}">' +
        ' <span class="joubel-simple-rounded-button-text">{{{createDocumentLabel}}}</span>' +
        '</div>' +
        '</div>' +
        '<div class="export-error-message" role="alert" aria-live="assertive">{{{requiresInputErrorMessage}}}</div>';

    /* global Mustache */
    self.$inner.append(Mustache.render(documentExportTemplate, self.params));

    self.$pageTitle = self.$inner.find('.page-header');
    self.$helpButton = self.$inner.find('.page-help-text');
    self.$exportDocumentButton = self.$inner.find('.export-document-button');

    self.initHelpTextButton();
    self.initDocumentExportButton();
  };

  /**
   * Setup button for creating a document from stored input array
   */
  DocumentExportPage.prototype.initDocumentExportButton = function () {
    var self = this;
    H5P.DocumentationTool.handleButtonClick(self.$exportDocumentButton, function () {
      // Check if all required input fields are filled
      if (self.isRequiredInputsFilled()) {
        var exportDocument = new H5P.DocumentExportPage.CreateDocument(self.params, self.exportTitle, self.inputArray, self.inputGoals, self.getLibraryFilePath('exportTemplate.docx'));
        exportDocument.attach(self.$wrapper.parent().parent());
        exportDocument.on('export-page-closed', function () {
          self.trigger('export-page-closed');

          // Set focus back on button
          self.$exportDocumentButton.focus();
        });

        self.trigger('export-page-opened');
      }
    });
  };

  /**
   * Setup help text functionality for reading more about the task
   */
  DocumentExportPage.prototype.initHelpTextButton = function () {
    var self = this;

    if (this.params.helpText !== undefined && this.params.helpText.length) {
      // Handle help button action
      self.$helpButton.on('click', function () {
        self.trigger('open-help-dialog', {
          title: self.params.title,
          helpText: self.params.helpText
        });
      });
    }
    else {
      self.$helpButton.remove();
    }
  };

  DocumentExportPage.prototype.getTitle = function () {
    return this.params.title;
  };

  DocumentExportPage.prototype.setExportTitle = function (title) {
    this.exportTitle = title;
    return this;
  };

  DocumentExportPage.prototype.updateOutputFields = function (inputs) {
    this.inputArray = inputs;
    return this;
  };

  DocumentExportPage.prototype.updateExportableGoals = function (newGoals) {
    this.inputGoals = newGoals;
    return this;
  };

  DocumentExportPage.prototype.isRequiredInputsFilled = function () {
    return this.requiredInputsAreFilled;
  };

  DocumentExportPage.prototype.updateRequiredInputsFilled = function (requiredInputsAreFilled) {
    this.$inner.toggleClass('required-inputs-not-filled', !requiredInputsAreFilled);

    this.requiredInputsAreFilled = requiredInputsAreFilled;
    return this;
  };

  /**
   * Sets focus on the page
   */
  DocumentExportPage.prototype.focus = function () {
    this.$pageTitle.focus();
  };

  return DocumentExportPage;
}(H5P.jQuery, H5P.EventDispatcher));
